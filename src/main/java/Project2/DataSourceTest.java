package Project2;

import java.sql.Connection;
import java.sql.SQLException;

import Project2.Utils.DataSource;

public class DataSourceTest {

	public static void main(String[] args) throws SQLException {
		DataSource DST = new DataSource();
		Connection conn1 = DST.getConnection(); 
		Connection conn2 = DST.getConnection(); 
		System.out.println(conn1); //連線1
		System.out.println(conn2); //連線2
		conn1.close(); //歸還連線1至連線池
		System.out.println(conn1); //連線1已關閉
		System.out.println(conn2); //連線2
		conn1 = DST.getConnection();
		System.out.println(conn1); //連線1
		conn1.close(); //歸還連線至連線池
	}

}
