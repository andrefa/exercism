import java.security.SecureRandom;

public class Robot {

	private static final String ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	private static final SecureRandom RAND = new SecureRandom();
	
	private String name;

	public Robot(){
		this.name = generate();
	}
	
	public String getName() {
		return this.name;
	}
	
	public void reset() {
		this.name = generate();
	}
	
	private final String generate(){
		return randomString(2) + lpad(randomNumber());
	}
	
	private String randomString(int len) {
		StringBuilder sb = new StringBuilder(len);
		
		for (int i = 0; i < len; i++)
			sb.append(ALPHABET.charAt(RAND.nextInt(ALPHABET.length())));
		
		return sb.toString();
	}
	
	private int randomNumber(){
		return RAND.nextInt(1000);
	}
	
	private String lpad(int num) {
		String padding = "00" + num; 
		return (padding).substring(padding.length()-3);
	}

}