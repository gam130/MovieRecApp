import java.awt.image.BufferedImage;

public class Movie {

    private final String name;
    private final String genre;
    private final String description;
    private final double popularity;
    private final BufferedImage poster;
    private final String director;
    private final int year;


    public Movie (String name, String genre, String description, double popularity, BufferedImage poster,
                  String director, int year) {

        this.name = name;
        this.genre = genre;
        this.description = description;
        this.popularity = popularity;
        this.poster = poster;
        this.director = director;
        this.year = year;
    }

    public String getName() {
        return name;
    }

    public String getGenre() {
        return genre;
    }

    public String getDescription() {
        return description;
    }

    public double getPopularity() {
        return popularity;
    }

    public BufferedImage getPoster() {
        return poster;
    }

    public String getDirector() {
        return director;
    }

    public int getYear() {
        return year;
    }
}
