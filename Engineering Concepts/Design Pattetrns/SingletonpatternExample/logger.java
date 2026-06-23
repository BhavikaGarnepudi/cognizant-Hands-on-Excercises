class logger{
    private logger(){}
    private  static class Helper{
        private static final logger lg=new logger();
        
    }
     public  void loginfo(String str)
       {
        System.out.println("[info]"+str);
       }
       public  void logerror(String str)
       {
        System.out.println("[error]"+ str);
       }
    public static logger getInstance()
    {
        return Helper.lg;
    }
     
 }