using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TherapyAPI.Data;
using TherapyAPI.Models;

namespace TherapyAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TherapiesController : ControllerBase
{
    private readonly AppDbContext _context;

    public TherapiesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var therapies = await _context.Therapies
            .Include(t => t.Tasks)
            .ToListAsync();

        return Ok(therapies);
    }

    [HttpPost]
    public async Task<IActionResult> Create(Therapy therapy)
    {
        _context.Therapies.Add(therapy);

        await _context.SaveChangesAsync();

        return Ok(therapy);
    }
}