
using DotNetComputerSekho.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace   DotNetComputerSekho.Controllers
{
    [Route("api/[controller]")]
    [EnableCors]
    [ApiController]
    public class BatchController : ControllerBase
    {
        private readonly IBatchRepository _service;

        public BatchController( IBatchRepository service)
        {
            _service = service;
        }

        [HttpPost("addBatch")]
        public IActionResult SaveBatch([FromBody] Batch batch)
        {
            _service.SaveBatch(batch);
            return Ok();
        }

        [HttpGet("getbatch")]
        public ActionResult<IEnumerable<Batch>> GetAllBatch()
        {
            var batches = _service.GetAllBatches();
            return Ok(batches);
        }

        [HttpGet("batch/{batchno}")]
        public ActionResult<Batch> GetBatch(int batchno)
        {
            var batch = _service.GetBatchByBatchNo(batchno);
            if (batch == null)
            {
                return NotFound();
            }
            return Ok(batch);
        }

        [HttpGet("upcomingBatch")]
        public ActionResult<IEnumerable<Batch>> GetUpcomingBatch()
        {
            var upcomingBatches = _service.GetUpcomingBatches();
            return Ok(upcomingBatches);
        }

        [HttpGet("getCurrentBatch")]
        public ActionResult<IEnumerable<Batch>> GetCurrentBatch()
        {
            var currentBatches = _service.GetCurrentBatches();
            return Ok(currentBatches);
        }

        [HttpGet("getBatchByName/{batchName}")]
        public ActionResult<IEnumerable<Batch>> GetBatchByName(string batchName)
        {
            var batches = _service.GetBatchesByBatchName(batchName);
            return Ok(batches);
        }

        [HttpGet("getPastBatch")]
        public ActionResult<IEnumerable<Batch>> GetPastBatch()
        {
            var pastBatches = _service.GetPastBatches();
            return Ok(pastBatches);
        }

        [HttpGet("getBatchByCourseId/{cid}")]
        public ActionResult<IEnumerable<Batch>> GetBatchByCourseId(int cid)
        {
            var batches = _service.GetBatchesByCourseId(cid);
            return Ok(batches);
        }
    }
}
