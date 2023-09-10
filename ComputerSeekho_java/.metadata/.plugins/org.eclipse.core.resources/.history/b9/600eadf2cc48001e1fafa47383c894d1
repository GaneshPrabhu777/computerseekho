package com.example.repositories;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entities.Enquiry;
import com.example.entities.Staff;

import jakarta.transaction.Transactional;

@Transactional
@Repository
public interface EnquriyRepository extends JpaRepository<Enquiry, Integer> {

//	@Modifying
//	@Query(value="update Enquiry e set e.enquirer_name=:enquirer_name,e.enquirer_email_id=:enquirer_email_id,e.enquirer_mobile=:enquirer_mobile,e.enquirer_alternate_mobile=:enquirer_alternate_mobile,e.enquirer_address=:enquirer_address,e.enquirer_query=:enquirer_query,e.enquiry_date=:enquiry_date,e.enquiry_processed_flag=:enquiry_processed_flag,e.inquiry_counter=:inquiry_counter,e.Follow_up_date=DATE_ADD(enquiry_date, INTERVAL 3 DAY)",nativeQuery = true)
//	void formsubmit(@Param("enquirer_name")String ename,@Param("sname")String sname,@Param("mno")Long mobileno,@Param("email")String email,@Param("address")String address,@Param("query") String Query);
//	

	@Query(value = "select * from enquiry where Enquirer_name = :sname", nativeQuery = true)
	Optional<Enquiry> findByName(@Param("sname") String sname);

	@Modifying
	@Query(value = "update enquiry e set e.enquirer_name=:enquirer_name,e.enquirer_mobile=:enquirer_mobile,"
			+ "e.enquirer_email_id=:enquirer_email_id,e.enquirer_query=:enquirer_query,e.followup_msg=:followup_msg,e.closure_reason=:closure_reason, e.enquiry_processed_flag= :flag"
			+ " where e.enquiry_id=:enquiry_id", nativeQuery = true)
	void updatedata(@Param("enquirer_name") String enquirer_name,@Param("enquirer_mobile") String enquirer_mobile, @Param("enquirer_email_id") String enquirer_email_id,
			@Param("enquirer_query") String enquirer_query, @Param("closure_reason") String closure_reason,@Param("followup_msg") String followup_msg, @Param("flag") boolean enquiry_processed_flag,
			 @Param("enquiry_id") int enquiry_id);

//	@Modifying
//	@Query(value = "INSERT INTO enquiry (enquirer_name, enquirer_mobile, enquirer_email_id, enquirer_query,staff_id) VALUES ( :ename, :mobile, :email, :query, :id", nativeQuery = true)
//	void addEnquiry(@Param("ename") String enquirerName, @Param("mobile") String enquirerMobile,
//			@Param("email") String enquirerEmail, @Param("query") String enquirerQuery, @Param("id") Staff staffId);

//@Modifying
//@Query(value="select e.* from Enquiry e , Staff s where e.staff_id=s.staff_id and s.staff_id = :staff_id",nativeQuery=true)
//	    List<Enquiry> findByStaff_id(@Param("staff_id")int staff_id);

	// trying but postman giving
	@Modifying
	@Query(value = "select e.* from Enquiry e where e.staff_id = :staff_id", nativeQuery = true)
	List<Enquiry> findByStaff_id(@Param("staff_id") int staff_id);

//	@Modifying
//	@Query(value = "update enquiry e set e.enquirer_name=:name,e.enquirer_address=:address,e.enquirer_mobile=:mobile,e.enquiry_date=current_date(),e.enquirer_email_id=:email,e.enquirer_query=:equery,e.closure_reason=:creason,e.closure_reason_id=:clid,e.enquiry_processed_flag=:eflag,e.follow_up_date=DATE_ADD(CURDATE(),INTERVAL 3 DAY),e.student_name=:sname,e.inquiry_counter=:inc", nativeQuery = true)
//	void updatef(@Param("name") String enquirer_name, @Param("address") String enquirer_address,
//			@Param("mobile") long enquirer_mobile, @Param("email") String enquirer_email_id,
//			@Param("equery") String enquirer_query, @Param("creason") String closure_reason,
//			@Param("clid") int closure_reason_id, @Param("eflag") boolean enquiry_processed_flag,
//			@Param("sname") String student_name, @Param("inc") int inquiry_counter);

//	@Modifying
//	@Query(value = "INSERT INTO enquiry (enquirer_name, enquirer_address, enquirer_mobile, enquiry_date,"
//			+ "enquirer_email_id, enquirer_query, closure_reason, closure_reason_id,enquiry_processed_flag, "
//			+ "follow_up_date, student_name, inquiry_counter )  VALUES (:name, :address, :mobile, current_date(),"
//			+ ":email, :equery, :creason, :clid, :eflag, DATE_ADD(CURDATE(), INTERVAL 3 DAY), :sname, :inc")
//	void insertInto(@Param("name") String name, @Param("address") String address, @Param("mobile") String mobile,
//			@Param("email") String email, @Param("equery") String equery, @Param("creason") String creason,
//			@Param("clid") int i, @Param("eflag") boolean b, @Param("sname") Date date,
//			@Param("inc") String string);

}
