package client;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

public class Client {

	public static final String IP = "localhost";//·þÎñÆ÷µØÖ· 
	public static final int PORT = 8000;//·þÎñÆ÷¶Ë¿ÚºÅ  

	public static void main(String[] args) {  
		handler(); 
	}

	private static void handler(){
		try {
			//ÊµÀý»¯Ò»¸öSocket£¬²¢Ö¸¶¨·þÎñÆ÷µØÖ·ºÍ¶Ë¿Ú
			Socket client = new Socket(IP, PORT);
			//¿ªÆôÁ½¸öÏß³Ì£¬Ò»¸ö¸ºÔð¶Á£¬Ò»¸ö¸ºÔðÐ´
			new Thread(new ReadHandlerThread(client)).start();
			new Thread(new WriteHandlerThread(client)).start();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}  

/*
 *´¦Àí¶Á²Ù×÷µÄÏß³Ì 
 */
class ReadHandlerThread implements Runnable{
	private Socket client;

	public ReadHandlerThread(Socket client) {
		this.client = client;
	}

	@Override
	public void run() {
		DataInputStream dis = null;
		try {
			while(true){
				//¶ÁÈ¡·þÎñÆ÷¶ËÊý¾Ý  
				dis = new DataInputStream(client.getInputStream());
				String receive = dis.readUTF();   
				System.out.println("·þÎñÆ÷¶Ë·µ»Ø¹ýÀ´µÄÊÇ: " + receive);  
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally{
			try {
				if(dis != null){
					dis.close();
				}
				if(client != null){
					client = null;
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}

/*
 * ´¦ÀíÐ´²Ù×÷µÄÏß³Ì
 */
class WriteHandlerThread implements Runnable{
	private Socket client;

	public WriteHandlerThread(Socket client) {
		this.client = client;
	}

	@Override
	public void run() {
		DataOutputStream dos = null;
		BufferedReader br = null;
		try {
			while(true){
				//È¡µÃÊä³öÁ÷
				dos = new DataOutputStream(client.getOutputStream());
				System.out.print("ÇëÊäÈë: \t");  
				//¼üÅÌÂ¼Èë
				br = new BufferedReader(new InputStreamReader(System.in));
				String send = br.readLine();  
				//·¢ËÍÊý¾Ý
				dos.writeUTF(send);  
			}
		} catch (IOException e) {
			e.printStackTrace();
		}  finally{
			try{
				if(dos != null){
					dos.close();
				}
				if(br != null){
					br.close();
				}
				if(client != null){
					client = null;
				}
			}catch(Exception e){
				e.printStackTrace();
			}
		}
	}
}
