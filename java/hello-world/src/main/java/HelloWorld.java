public class HelloWorld {

	public static String hello(String string) {
		return "Hello, " + (string == null || string.isEmpty() ? "World" : string) + "!";
	}

}