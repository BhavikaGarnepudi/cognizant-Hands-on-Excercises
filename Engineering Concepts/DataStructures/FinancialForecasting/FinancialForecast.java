package FinancialForecasting;

public class FinancialForecast {

    public double futureValue(double currentValue,
                              double growthRate,
                              int years) {

        // Base case
        if (years == 0) {
            return currentValue;
        }

        // Recursive case
        return futureValue(currentValue, growthRate, years - 1)
                * (1 + growthRate);
    }
}