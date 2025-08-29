// Contact form handling with basic validation and rate limiting

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  honeypot?: string; // Spam protection
}

interface ContactResponse {
  success: boolean;
  message: string;
}

// Simple in-memory rate limiting (in production, use Redis or similar)
const submissionTimes = new Map<string, number[]>();

export const submitContactForm = async (data: ContactFormData): Promise<ContactResponse> => {
  // Honeypot check - if filled, likely spam
  if (data.honeypot && data.honeypot.trim() !== '') {
    return {
      success: false,
      message: 'Form submission blocked'
    };
  }

  // Basic validation
  if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
    return {
      success: false,
      message: 'Please fill in all required fields'
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: 'Please enter a valid email address'
    };
  }

  // Rate limiting - max 3 submissions per hour per IP
  const clientId = 'default'; // In production, use actual IP
  const now = Date.now();
  const hourAgo = now - (60 * 60 * 1000);
  
  const userSubmissions = submissionTimes.get(clientId) || [];
  const recentSubmissions = userSubmissions.filter(time => time > hourAgo);
  
  if (recentSubmissions.length >= 3) {
    return {
      success: false,
      message: 'Too many submissions. Please try again later.'
    };
  }

  // Update rate limiting
  recentSubmissions.push(now);
  submissionTimes.set(clientId, recentSubmissions);

  // Simulate form submission (replace with actual API call)
  try {
    // In production, send to your backend API
    console.log('Form submission:', {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      timestamp: new Date().toISOString()
    });

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.'
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'There was an error sending your message. Please try calling us directly.'
    };
  }
};