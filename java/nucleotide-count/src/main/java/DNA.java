import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class DNA {
	
	private static final char[] NUCLEOTIDES = {'A','C','G','T'};

	private String dna;

	public DNA(String string) {
		this.dna = string;
	}

	public Map<Character,Integer> nucleotideCounts() {
		Map<Character,Integer> result = new HashMap<>();
		
		for (Character n : NUCLEOTIDES)
			result.put(n, dna.length() - dna.replaceAll(n.toString(), "").length());
		
		return result;
	}

	public Integer count(char c) {
		if (Arrays.binarySearch(NUCLEOTIDES, c) < 0)
			throw new IllegalArgumentException();
		return nucleotideCounts().get(c);
	}

}