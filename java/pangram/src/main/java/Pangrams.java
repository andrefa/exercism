public class Pangrams {

	public static boolean isPangram(String string) {
		String normalized = string.toLowerCase().replaceAll("[^a-z]", "");

		for (Character c = 97; c<= 122; c++)
			if (normalized.length() == (normalized.replaceAll(c.toString(), "").length()))
				return false;
		
		return true;
	}

}