public class St {
	public static void main(String[] arg){
		    String myStr = "Hello planet earth, you are a great planet.";
		    String rep = "Hello";
		    String wi = "Hi";
		    int i = myStr.indexOf("Hello");
		    while ( i > -1 ){
			myStr = myStr + myStr.substring(i, myStr.length()-1);
			System.out.println(myStr);
			i = myStr.indexOf("Hello");
		    }
	}
}
