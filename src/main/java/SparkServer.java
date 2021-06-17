import com.google.gson.Gson;
import spark.Spark;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class SparkServer {

    public static void main(String[] args) {
        Spark.get("/searchMovies", (req, res) -> {
            URL url = new URL("https://api.themoviedb.org/3/search/movie?api_key=" +
                    System.getenv("TMDB_API_KEY") + "&language=en-US&query=" +
                    req.queryParams("movieName") + "&page=1");


            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.connect();
            return con.getContent();
        });
    }

}
