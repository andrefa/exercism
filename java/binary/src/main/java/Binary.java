public class Binary {

	private String input;

	public Binary(String input) {
		this.input = input;
	}

	public int getDecimal() {
		if (!input.matches("[01]+"))
			return 0;
		
		return toDecimal(input, 0);
	}

	private int toDecimal(String ipt, int i) {
		if (i >= ipt.length())
			return 0;
		
		return (int) ((ipt.charAt(ipt.length()-1-i) == '1' ? (Math.pow(2,i)) : 0) + toDecimal(ipt, ++i));
	}

}