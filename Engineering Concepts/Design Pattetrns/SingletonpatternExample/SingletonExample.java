public class SingletonExample {
    public static void main(String[] args)
    {   
        logger l1=logger.getInstance();
        logger l2=logger.getInstance();
        l1.loginfo("Application started");
        l1.logerror("Null pointer exception occurred");
        l1.loginfo("User logged in");
        if(l1==l2)
        {
            System.out.println("Both are same");
        }
        else
        {
            System.out.println("Both are different");
        }
    }
}