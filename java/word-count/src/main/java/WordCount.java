import java.util.HashMap;
import java.util.Map;

public class WordCount {

	public Map<String, Integer> phrase(String string) {
		String[] words = explode(string);
		Map<String, Integer> result = new HashMap<>();

		for(String word : words) {
			Integer count = result.putIfAbsent(word, 1);
			if (count != null)
				result.put(word, count+1);
		}
		
		return result;
	}

	private String[] explode(String string) {
		return string.toLowerCase().replaceAll("[^ a-z0-9]", " ").replaceAll("[ ]+", " ").split(" ");
	}

}