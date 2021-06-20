import com.google.gson.Gson;
import spark.Spark;
import utils.CORSFilter;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class SparkServer {

    public static void main(String[] args) {

        CORSFilter corsFilter = new CORSFilter();
        corsFilter.apply();

        Integer counter = 0;

        Spark.get("/searchMovies", (req, res) -> {
            String urlString = "https://api.themoviedb.org/3/search/movie?api_key=" +
                    System.getenv("TMDB_API_KEY") + "&language=en-US&query=" +
                    //req.queryParams("movieName")
                    "fight%20club&page=1";
            urlString = urlString.replace(" ", "%20");
            URL url = new URL(urlString);
            System.out.println("search queued for: " + urlString);


            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.connect();
            return con.getContent();
        });

        Spark.get("/counter", (req, res) -> {
            Gson gson = new Gson();
            return gson.toJson(counter);
        });
    }

}
