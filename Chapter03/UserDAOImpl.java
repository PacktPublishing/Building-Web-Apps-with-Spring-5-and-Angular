package com.book.healthapp.repositories;

import java.util.List;

import javax.persistence.TypedQuery;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.book.healthapp.domain.User;

@Repository
@Transactional(propagation=Propagation.MANDATORY)
public class UserDAOImpl implements UserDAO {

	private SessionFactory sessionFactory;
    
	@Autowired 
	public UserDAOImpl(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}
	
    @SuppressWarnings("unchecked")
    @Override
	public List<User> findByEmail(String email) {
    	Session session = this.sessionFactory.getCurrentSession();
        TypedQuery<User> query = session.getNamedQuery("findByEmail");  
        query.setParameter("email", email);
//    	Query query = session.getNamedQuery("findByEmail");
//    	query.setString("email", email);
        return query.getResultList();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<User> findByEmailAndPassword(String email, String password) {
		Session session = this.sessionFactory.getCurrentSession();
		TypedQuery<User> query = session.getNamedQuery("findByEmailAndPassword");  
        query.setParameter("email", email); 
        query.setParameter("password", password);
        return query.getResultList();
	}

	@Override
	public User save(User user) {
		Session session = this.sessionFactory.openSession();
		session.save(user);
		session.close();
		return user;
	}
	
	@Override
	public void update(User user) {
//		Session session = this.sessionFactory.openSession();
//		User persistentUser = (User) session.load(User.class, new Integer(user.getId()));
//		Transaction tx = session.beginTransaction();
//		persistentUser.setFirstName(user.getFirstname());
//		persistentUser.setLastname(user.getLastname());
//		session.update(persistentUser);		
//		tx.commit();
		
//		Session session = this.sessionFactory.openSession();
//		Transaction tx1 = session.beginTransaction();
//		User persistentUser = (User) session.load(User.class, new Integer(user.getId()));
//		tx1.commit();
//		Transaction tx2 = session.beginTransaction();
//		user.setEmail(persistentUser.getEmail());
//		user.setPassword(persistentUser.getPassword());
//		session.merge(user);		
//		tx2.commit();
		
		
	}
}
