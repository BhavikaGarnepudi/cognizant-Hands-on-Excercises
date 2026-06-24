package EcommerceSearchFunction;
public class SearchUtils {

    // LINEAR SEARCH — O(n)
    public static int linearSearch(Product[] products, int targetId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].getProductId() == targetId) {
                return i;   // return index where found
            }
        }
        return -1;          // not found
    }

    // BINARY SEARCH — O(log n)  — array must be sorted by productId
    public static int binarySearch(Product[] sorted, int targetId) {
        int low  = 0;
        int high = sorted.length - 1;

        while (low <= high) {
            int mid   = low + (high - low) / 2;
            int midId = sorted[mid].getProductId();

            if      (midId == targetId) return mid;
            else if (midId <  targetId) low  = mid + 1;
            else                        high = mid - 1;
        }
        return -1;
    }
}