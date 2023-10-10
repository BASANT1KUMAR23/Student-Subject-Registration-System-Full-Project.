package com.codewitharjun.fullstackbackend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String session_year;
    private String semester;
    private String subject_name;
    private String faculty_name;
    private String subject_code;
    private String subject_credit;
    private String subject_type;
    private String basket;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getsession_year() {
        return session_year;
    }

    public void setsession_year(String session_year) {
        this.session_year = session_year;
    }

    public String getsemester() {
        return semester;
    }

    public void setsemester(String semester) {
        this.semester = semester;
    }

    public String getsubject_name() {
        return subject_name;
    }

    public void setsubject_name(String subject_name) {
        this.subject_name = subject_name;
    }
    public String getfaculty_name() {
        return faculty_name;
    }

    public void setfaculty_name(String faculty_name) {
        this.faculty_name = faculty_name;
    }
    public String getsubject_code() {
        return subject_code;
    }

    public void subject_code(String subject_code) {
        this.subject_code = subject_code;
    }
    public String getsubject_credit() {
        return subject_credit;
    }

    public void setsubject_credit(String subject_credit) {
        this.subject_credit = subject_credit;
    }
    public String getsubject_type() {
        return subject_type;
    }

    public void setsubject_type(String subject_type) {
        this.subject_type = subject_type;
    }
    public String getbasket() {
        return basket;
    }

    public void setbasket(String basket) {
        this.basket = basket;
    }

	
    
}
