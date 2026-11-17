namespace TherapyAPI.Models;

public class TaskItem
{
    public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

    public int Duration { get; set; }

    public int TherapyId { get; set; }
}