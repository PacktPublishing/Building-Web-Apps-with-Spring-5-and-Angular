    import java.sql.Connection;
    import java.sql.DriverManager;
    import java.sql.SQLException;

    /**
    * Sample program to test MySQL database connection
    */
    public class App 
    {
        public static void main( String[] args )
        { 
            String url = 
            "jdbc:mysql://localhost:3306/healthapp";
            String username = "root";
            String password = "r00t"; //Root password set 
            during MySQL installation procedure as 
            described above.

            System.out.println("Connecting database...");

            try {
                Connection connection = 
                DriverManager.getConnection(url, username, 
                password);
                System.out.println("Database connected!");
            } 
            catch (SQLException e) {
                throw new IllegalStateException("Cannot 
                connect the database!", e);
            }
        }
    }