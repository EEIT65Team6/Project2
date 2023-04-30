package Project2.Utils;

import java.sql.Connection;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

public class DataSource {
	public Connection getConnection() throws NamingException {
		Context context = new InitialContext();
		DataSource ds = (DataSource) context.lookup("java:/comp/env/jdbc/servdb");
		Connection conn = ds.getConnection();	
		return conn;
	}
}
