using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TherapyAPI.Data;
using TherapyAPI.Models;

namespace TherapyAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProfilesController : ControllerBase
{
    private readonly AppDbContext _context;

    public ProfilesController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        return Ok(await _context.Profiles.ToListAsync());
    }

    [HttpPost]
    public async Task<IActionResult> Create(Profile profile)
    {
        _context.Profiles.Add(profile);

        await _context.SaveChangesAsync();

        return Ok(profile);
    }
}