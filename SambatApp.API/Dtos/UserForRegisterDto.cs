using System.ComponentModel.DataAnnotations;

namespace SambatApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(8, MinimumLength = 4, ErrorMessage = "You must specify password between 4 and 8 characters")]
        public string Password { get; set; }

        [Required(ErrorMessage = "You must specify Your Name!")]
        public string Name { get; set; }
    }
}