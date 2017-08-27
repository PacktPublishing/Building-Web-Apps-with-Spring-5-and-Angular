package com.book.healthapp.repositories;

import java.util.List;

import javax.persistence.TypedQuery;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.book.healthapp.controllers.RxController;
import com.book.healthapp.domain.Doctor;
import com.book.healthapp.domain.Rx;

@Repository
@Transactional
public class RxDAOImpl implements RxDAO {
	
	final static Logger logger = LoggerFactory.getLogger(RxDAOImpl.class);

	private SessionFactory sessionFactory;
    
	@Autowired 
	public RxDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
	@Override
	public List<Rx> findByDoctorId(int doctorId) {
		Session session = this.sessionFactory.getCurrentSession();
        TypedQuery<Rx> query = session.getNamedQuery("findByDoctorId");  
        query.setParameter("id", doctorId);
        List<Rx> rxList = query.getResultList();
		return rxList;
	}

	@Override
	public List<Rx> findByUserId(int userId) {
		Session session = this.sessionFactory.getCurrentSession();
        TypedQuery<Rx> query = session.getNamedQuery("findByUserId");  
        query.setParameter("id", userId);
        List<Rx> rxList = query.getResultList();
		return rxList;
	}

	@Override
	public Rx save(Rx rx) {
		Session session = this.sessionFactory.openSession();
		session.save(rx);
		session.close();
		return rx;
	}
	

}
