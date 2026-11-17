using Microsoft.EntityFrameworkCore;
using TherapyAPI.Models;

namespace TherapyAPI.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Profile> Profiles => Set<Profile>();
    public DbSet<Therapy> Therapies => Set<Therapy>();
    public DbSet<TaskItem> Tasks => Set<TaskItem>();
}