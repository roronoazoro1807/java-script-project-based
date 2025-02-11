# Speech to Text Converter Web App

## Overview
A modern web application that converts speech to text in real-time using the Web Speech API. The app supports multiple languages and includes features like dark mode, text saving, and clear functionality.

## Features
- Real-time speech-to-text conversion
- Multi-language support (English, Hindi, French, Spanish)
- Dark/Light mode toggle
- Save transcription as text file
- Clear functionality
- Responsive design
- Intuitive user interface with icon buttons

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- Web Speech API
- Font Awesome Icons

## Technical Implementation

### HTML Components
- Language selection dropdown
- Result display area
- Control buttons with Font Awesome icons
- Dark mode toggle
- Responsive container layout

### CSS Features
- Responsive design with Flexbox
- Dark/Light mode transitions
- Modern UI with shadows and rounded corners
- Hover effects on buttons
- Smooth theme transitions
- Mobile-friendly layout

### JavaScript Functionality

#### Speech Recognition
```javascript
function startConverting() {
  if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    // ... recognition setup
  }
}
```

#### Multi-language Support
```javascript
const selectedLanguage = document.getElementById("languageSelect").value;
recognition.lang = selectedLanguage;
```

#### Text Processing
```javascript
function processSpeech(event) {
  let finalTranscript = "";
  let interimTranscript = "";
  // ... speech processing logic
}
```

## Features in Detail

### 1. Language Selection
- Supports multiple languages:
  - English (US)
  - Hindi
  - French
  - Spanish
- Real-time language switching

### 2. Speech Recognition
- Continuous recognition
- Interim results display
- Error handling
- Start/Stop functionality

### 3. Text Management
- Clear functionality
- Save as text file
- Real-time display updates
- Interim results in gray color

### 4. Theme Management
- Dark/Light mode toggle
- Persistent theme state
- Smooth transitions
- Contrast optimization


## Browser Compatibility
- Google Chrome (recommended)
- Chrome-based browsers
- Requires Web Speech API support

## Known Limitations
- Browser compatibility limited to Chrome and Chrome-based browsers
- Requires microphone access
- Internet connection required for some language models

## Development Prerequisites
- Modern web browser
- Text editor
- Basic understanding of:
  - HTML/CSS
  - JavaScript
  - Web APIs
  - DOM manipulation

## Future Enhancements
- Additional language support
- Voice command integration
- Translation features
- Punctuation automation
- Text formatting options
- Cloud storage integration
- Speech synthesis capabilities

## Troubleshooting
1. Ensure microphone access is granted
2. Use supported browser (Chrome recommended)
3. Check internet connection
4. Verify language support for selected option

## Best Practices Used
- Clean code structure
- Semantic HTML
- Responsive design
- Error handling
- User feedback
- Accessibility considerations
- Performance optimization

## Resources
- [Web Speech API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Chrome](https://www.google.com/chrome/)

