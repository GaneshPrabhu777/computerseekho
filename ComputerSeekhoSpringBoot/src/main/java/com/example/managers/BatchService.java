package com.example.managers;

import java.util.List;
import java.util.Optional;

import com.example.entities.Batch;

public interface BatchService {
	void save(Batch ref);
	List<Batch> getAll();
	Optional<Batch> getBatch(int batchno);
	List<Batch> getUpcomingBatch();
	List<Batch> getCurrentBatch();
	List<Batch> getPastBatch();
	List<Batch> getBatchByName(String batchName);
	List<Batch> getBatchByCourseId(int cid);
}
