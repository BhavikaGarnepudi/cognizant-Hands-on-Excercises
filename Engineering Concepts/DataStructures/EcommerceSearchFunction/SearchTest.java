package EcommerceSearchFunction;
import java.util.Arrays;

public class SearchTest {
    public static void main(String[] args) {

        Product[] products = {
            new Product(101, "Laptop",     "Electronics"),
            new Product(102, "Phone",      "Electronics"),
            new Product(103, "Shoes",      "Fashion"),
            new Product(104, "Shirt",      "Fashion"),
            new Product(105, "Watch",      "Accessories"),
            new Product(106, "Bag",        "Accessories"),
            new Product(107, "Headphones", "Electronics"),
            new Product(108, "Sunglasses", "Fashion"),
            new Product(109, "Keyboard",   "Electronics"),
            new Product(110, "Mouse",      "Electronics"),
        };

        Product[] sorted = products.clone();
        Arrays.sort(sorted);

        int targetId = 107;

        // Linear Search
        int li = SearchUtils.linearSearch(products, targetId);
        System.out.println("LINEAR SEARCH");
        System.out.println(li != -1 ? products[li] : "Not Found");

        // Binary Search
        int bi = SearchUtils.binarySearch(sorted, targetId);
        System.out.println("\nBINARY SEARCH");
        System.out.println(bi != -1 ? sorted[bi] : "Not Found");
    }
}