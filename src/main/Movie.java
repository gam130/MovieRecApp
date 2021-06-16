package main;

public class Movie {

    private String name;

    public static void main(String[] args) {
        String s = System.getenv("TMDB_API_KEY");
        System.out.println(s);
    }

}
