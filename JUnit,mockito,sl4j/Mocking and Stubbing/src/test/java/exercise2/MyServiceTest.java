package exercise2;

import static org.mockito.Mockito.verify;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testVerifyInteraction() {

        // Step 1: Create a mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Create service using the mock
        MyService service = new MyService(mockApi);

        // Step 3: Call the method
        service.fetchData();

        // Step 4: Verify interaction
        verify(mockApi).getData();

        System.out.println("Verified: getData() method was called successfully.");
    }
}
