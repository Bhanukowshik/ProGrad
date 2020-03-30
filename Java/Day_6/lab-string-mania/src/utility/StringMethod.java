package utility;

public class StringMethod
{
	private String input;

	public String getInput() 
	{
		return input;
	}

	public void setInput(String input)
	{
		this.input = input;
	}

	public String lower(String input) 
	{
		String output = input.toLowerCase();
		return output;

	}

	public String upper(String input)
	{
		String output = input.toUpperCase();
		return output;
	}

	public String firstCharacter(String input) 
	{
		String output = Character.toString(input.charAt(0));
		return output;
	}

	public String length(String input)
	{
		String output = String.valueOf(input.length());
		return output;
	}

	public String trim(String input) 
	{
		String output = input.trim();
		return output;
	}

}
