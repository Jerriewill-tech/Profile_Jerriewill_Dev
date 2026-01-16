function welcomeGreeting(name) {
      const hour = new Date().getHours();
      let timeGreeting;

      if (hour < 12) timeGreeting = "Good morning";
      else if (hour < 18) timeGreeting = "Good afternoon";
      else timeGreeting = "Good evening";

      return `${timeGreeting}, ${name}! Welcome to the site.`;
    }

    function showGreeting() {
      const message = welcomeGreeting("Hello There");
      document.getElementById("greeting").textContent = message;
    }