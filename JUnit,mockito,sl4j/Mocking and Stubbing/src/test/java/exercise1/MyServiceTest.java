package exercise1;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Step 1: Create a mock object
        ExternalApi mockApi = Mockito.mock(ExternalApi.class);

        // Step 2: Stub the method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Step 3: Use the mock object
        MyService service = new MyService(mockApi);

        String result = service.fetchData();

        // Print the result
        System.out.println("Data received from mocked API: " + result);

        // Verify the result
        assertEquals("Mock Data", result);

        System.out.println("Test Passed Successfully!");
    }
}