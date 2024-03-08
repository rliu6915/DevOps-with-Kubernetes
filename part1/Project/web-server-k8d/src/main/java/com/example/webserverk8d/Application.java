package com.example.webserverk8d;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Application implements CommandLineRunner {

	@Value("${server.port}")
	private String serverPort;

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}



	@Override
	public void run(String... args) throws Exception {
		System.out.println("The server is up and running on " + serverPort);
	}
}
