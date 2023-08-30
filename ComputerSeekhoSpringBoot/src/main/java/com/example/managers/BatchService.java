package com.example.managers;

import java.util.List;
import com.example.entities.Batch;

public interface BatchService {
	void save(Batch ref);
	List<Batch> getAll();
	Batch getBatch(String batchno);
	List<Batch> getUpcomingBatch();
	List<Batch> getCurrentBatch();
	List<Batch> getPastBatch();
	List<Batch> getBatchByName(String batchName);
	List<Batch> getBatchByCourseId(int cid);
}
