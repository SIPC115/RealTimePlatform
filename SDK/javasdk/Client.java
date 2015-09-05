package client;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

public class Client {

	public static final String IP = "localhost";//��������ַ 
	public static final int PORT = 8000;//�������˿ں�  

	public static void main(String[] args) {  
		handler(); 
	}

	private static void handler(){
		try {
			//ʵ����һ��Socket����ָ����������ַ�Ͷ˿�
			Socket client = new Socket(IP, PORT);
			//���������̣߳�һ���������һ������д
			new Thread(new ReadHandlerThread(client)).start();
			new Thread(new WriteHandlerThread(client)).start();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}  

/*
 *������������߳� 
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
				//��ȡ������������  
				dis = new DataInputStream(client.getInputStream());
				String receive = dis.readUTF();   
				System.out.println("�������˷��ع�������: " + receive);  
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
 * ����д�������߳�
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
				//ȡ�������
				dos = new DataOutputStream(client.getOutputStream());
				System.out.print("������: \t");  
				//����¼��
				br = new BufferedReader(new InputStreamReader(System.in));
				String send = br.readLine();  
				//��������
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
