import java.util.Arrays;
import java.util.List;

public class Anagram {

	private String string;

	public Anagram(String string) {
		this.string = new String(Arrays.sort(string.toCharArray()));
	}

	public List<String> match(List<String> asList) {
		// TODO Auto-generated method stub
		return null;
	}

}