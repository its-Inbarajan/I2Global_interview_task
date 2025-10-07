<h1>i2global Weather & News App</h1>

This is a Next.js project that provides weather information and personalized news based on your location and preferences. Users can select their preferred temperature unit (Celsius/Fahrenheit) and news categories.

**Features**
<li>🌦️ Real-time weather data based on your location </li>
<li>📰 News feed filtered by weather and user-selected categories </li>
<li>⚙️ Settings drawer for unit and category preferences </li>
<li>Responsive UI with modern design </li>

Getting Started

1. Clone the repository
   `git clone https://github.com/Inbarajan/I2Global_interview_task.git
cd i2global`

2. Install dependencies
 `npm install`

3. Configure environment variables
   Create a `.env` file in the root directory and add any required API keys (e.g., for weather or news APIs):

`NEXT_PUBLIC_WEATHER_API_KEY=your_weather_api_key
NEXT_PUBLIC_NEWS_API_KEY=your_news_api_key`

4. Run the development server
   npm run dev
Open http://localhost:3000 in your browser to view the app.

# Project Structure
📁ui – UI components (Navbar, WeatherCard, NewsCard, etc.) <br/>
📁context – React contexts for location, weather, news, and user preferences <br/>
📁app – Next.js app routes and pages

Customization

**Settings**: Use the settings drawer to select temperature units and news categories.
**Context**: User preferences are managed via React context (AppContext).

Deployment
Deploy easily on Vercel or any platform supporting Next.js.

Initialization Method:

1.  Clone the repo
2.  Install dependencies
3.  Add .env
4.  Run npm run dev
5.  Open in browser
