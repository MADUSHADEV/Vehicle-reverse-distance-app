package com.controller;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

//http://localhost:8080/back-end-1.0-SNAPSHOT/contractor
@WebServlet(name = "Contractor", value = "/contractor")
public class Contractor extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().write("Contractor" + req.getParameter("name"));
        String name = req.getParameter("name");
        System.out.println("name = " + name);
    }
}
