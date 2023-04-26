package Project2.Utils;

import java.sql.Connection;
import java.sql.SQLException;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class DataSource {
	private static HikariConfig config = new HikariConfig();
	static {
		config.setJdbcUrl("jdbc:sqlserver://localhost:1433;databaseName=Project2;TrustServerCertificate=True");
		config.setUsername("sa");
		config.setPassword("PassWord!");
		config.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
	}
	private static HikariDataSource ds = new HikariDataSource(config);
	
	public Connection getConnection() throws SQLException {
		return ds.getConnection();
	}
//	關閉連線池(不知道什麼時候要關)
//	public void closeConnection() {
//		System.out.println(ds.isClosed());
//		if(ds.isClosed()==false) {
//			ds.close();
//		}
//	}
}
