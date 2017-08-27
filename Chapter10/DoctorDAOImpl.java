package com.book.healthapp.repositories;

import java.util.List;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.book.healthapp.domain.Doctor;
import com.book.healthapp.domain.User;

@Repository
@Transactional
public class DoctorDAOImpl implements DoctorDAO {

	private SessionFactory sessionFactory;
    
	@Autowired 
	public DoctorDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	@Override
	public List<Doctor> findBySpecialityCode(String code) {
		Session session = this.sessionFactory.getCurrentSession();
        TypedQuery<Doctor> query = session.getNamedQuery("findBySpeciality");  
        query.setParameter("specialityCode", code);
        List<Doctor> doctors = query.getResultList();
        return doctors;
	}
	
	@Override
	public Doctor findByUserId(int userId) {
		Session session = this.sessionFactory.getCurrentSession();
        TypedQuery<Doctor> query = session.getNamedQuery("findById");  
        query.setParameter("id", userId);
        List<Doctor> doctors = query.getResultList();
        return doctors.get(0);
	}


	@Override
	public List<Doctor> findByLocation(String location) {
		return null;
	}

	@Override
	public List<Doctor> findByHospital(String hospitalName) {
//		Session session = this.sessionFactory.getCurrentSession();
//        TypedQuery<Doctor> query = session.getNamedQuery("findByHospital");  
		return null;
	}

	@Override
	public List<Doctor> findAll() {
		Session session = this.sessionFactory.getCurrentSession();
        TypedQuery<Doctor> query = session.getNamedQuery("findAll");  
        List<Doctor> doctors = query.getResultList();
        return doctors;
	}

	@Override
	public int findAllCount() {
		Session session = this.sessionFactory.getCurrentSession();
        TypedQuery<Number> query = session.getNamedQuery("findAllCount"); 
        int count = ((Number)query.getSingleResult()).intValue();
        return count;
	}

	@Override
	public Doctor save(Doctor doctor) {
		Session session = this.sessionFactory.openSession();
		session.save(doctor);
		session.close();
		return doctor;
	}

}
