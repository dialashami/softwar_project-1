import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Sparkles, BookOpen, HelpCircle, Lightbulb, Target, Send, Trash2 } from 'lucide-react';
import { useStore } from '../hooks/useStore';
import { toast } from 'sonner';

const teachingStrategies = [
  {
    id: 1,
    topic: 'Quadratic Equations',
    difficulty: 'Students struggling with factoring',
    suggestions: [
      'Use visual representations with area models to demonstrate factoring',
      'Start with simple perfect square trinomials before complex examples',
      'Implement pair programming where stronger students mentor peers',
      'Create real-world applications connecting to physics or engineering'
    ]
  },
  {
    id: 2,
    topic: 'Trigonometry',
    difficulty: 'Confusion with unit circle',
    suggestions: [
      'Use interactive online tools to visualize angle rotation',
      'Connect to real-world applications like navigation or waves',
      'Practice with mnemonic devices (SOHCAHTOA)',
      'Break down into smaller steps with frequent check-ins'
    ]
  }
];

const questionBank = [
  {
    id: 1,
    subject: 'Algebra',
    difficulty: 'Medium',
    question: 'Solve for x: 2x² + 5x - 3 = 0',
    answer: 'x = 1/2 or x = -3',
    type: 'Problem Solving'
  },
  {
    id: 2,
    subject: 'Geometry',
    difficulty: 'Easy',
    question: 'Find the area of a triangle with base 8cm and height 5cm',
    answer: 'Area = 20 cm²',
    type: 'Application'
  },
  {
    id: 3,
    subject: 'Statistics',
    difficulty: 'Hard',
    question: 'Calculate the standard deviation of the following dataset: 12, 15, 18, 12, 20, 15',
    answer: 'σ ≈ 2.94',
    type: 'Analysis'
  }
];

const lessonPlanTemplates = [
  {
    id: 1,
    topic: 'Introduction to Calculus',
    duration: '60 minutes',
    objectives: [
      'Understand the concept of limits',
      'Apply limit notation correctly',
      'Solve basic limit problems'
    ],
    activities: [
      'Warm-up: Review of functions (10 min)',
      'Introduction to limits with real-world examples (15 min)',
      'Guided practice problems (20 min)',
      'Group activity: Limit challenges (10 min)',
      'Wrap-up and homework assignment (5 min)'
    ]
  }
];

// AI response generator
function generateAIResponse(message) {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('help') || lowerMessage.includes('assist')) {
    return "I'm here to help! I can assist you with:\n• Teaching strategies for difficult topics\n• Generating quiz questions\n• Creating lesson plans\n• Analyzing student performance\n• Suggesting study materials\n\nWhat would you like help with specifically?";
  }
  
  if (lowerMessage.includes('question') || lowerMessage.includes('quiz')) {
    return "I can generate questions for your assessments! Please specify:\n• Subject area (e.g., Algebra, Geometry)\n• Difficulty level (Easy, Medium, Hard)\n• Number of questions needed\n• Question type (Multiple choice, Problem solving, etc.)";
  }
  
  if (lowerMessage.includes('lesson') || lowerMessage.includes('plan')) {
    return "I can help create a comprehensive lesson plan! Please provide:\n• Topic or concept to teach\n• Grade level\n• Desired duration\n• Learning objectives\n\nI'll generate a detailed lesson plan with activities and materials.";
  }
  
  if (lowerMessage.includes('strategy') || lowerMessage.includes('teaching')) {
    return "Based on your teaching patterns, I recommend:\n• Using more visual aids for abstract concepts\n• Incorporating real-world applications\n• Implementing peer tutoring for struggling students\n• Breaking complex topics into smaller, manageable units\n\nWould you like specific strategies for a particular topic?";
  }
  
  if (lowerMessage.includes('student') || lowerMessage.includes('performance')) {
    return "I've analyzed student performance and noticed:\n• 3 students need extra support in Algebra\n• Overall class average has improved by 8% this month\n• Best engagement occurs during interactive activities\n• Assignment completion rate is 92%\n\nWould you like a detailed analysis for specific students?";
  }
  
  return "That's a great question! I can help you with teaching strategies, lesson planning, question generation, and performance analysis. Could you provide more details about what you'd like to accomplish?";
}

export function AIAssistant() {
  const store = useStore();
  const chatHistory = store.getChatHistory();
  const [inputMessage, setInputMessage] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Question generator state
  const [questionForm, setQuestionForm] = useState({
    subject: '',
    difficulty: '',
    count: '5',
    topics: '',
  });

  // Lesson plan state
  const [lessonForm, setLessonForm] = useState({
    topic: '',
    grade: '',
    duration: '',
    objectives: '',
  });

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;
    
    // Add user message
    store.addChatMessage({
      role: 'user',
      content: inputMessage,
    });
    
    const userMessage = inputMessage;
    setInputMessage('');
    setIsGenerating(true);
    
    // Simulate AI thinking
    setTimeout(() => {
      const aiResponse = generateAIResponse(userMessage);
      store.addChatMessage({
        role: 'assistant',
        content: aiResponse,
      });
      setIsGenerating(false);
    }, 1000);
  };

  const handleClearChat = () => {
    if(window.confirm('Are you sure you want to clear the chat history?')) {
      store.clearChatHistory();
      toast.success('Chat history cleared');
    }
  };

  const handleGenerateQuestions = () => {
    if (!questionForm.subject || !questionForm.difficulty) {
      toast.error('Please select subject and difficulty');
      return;
    }
    
    toast.success(`Generated ${questionForm.count} ${questionForm.difficulty.toLowerCase()} questions for ${questionForm.subject}!`);
    setQuestionForm({ subject: '', difficulty: '', count: '5', topics: '' });
  };

  const handleGenerateLessonPlan = () => {
    if (!lessonForm.topic || !lessonForm.grade || !lessonForm.duration) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    toast.success(`Lesson plan for "${lessonForm.topic}" created successfully!`);
    setLessonForm({ topic: '', grade: '', duration: '', objectives: '' });
  };

  return (
    <div className="p-8 space-y-6">
      <div className="mb-8">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <h1 className="gradient-text">AI Teaching Assistant</h1>
        </div>
        <p className="text-muted-foreground mt-2">Get personalized teaching strategies and automated question generation</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <Card className="lg:col-span-2 border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
            <div className="flex items-center justify-between">
              <CardTitle>AI Chat</CardTitle>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleClearChat}
                className="rounded-xl"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="h-[500px] overflow-y-auto space-y-4 p-4 bg-gradient-to-br from-[oklch(0.99_0.01_270)] to-white rounded-2xl border border-[oklch(0.92_0.04_270)]">
                {chatHistory.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl shadow-md ${
                        message.role === 'user'
                          ? 'gradient-primary text-white'
                          : 'bg-white border border-[oklch(0.92_0.04_270)]'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isGenerating && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] p-4 rounded-2xl shadow-md bg-white border border-[oklch(0.92_0.04_270)]">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Ask me anything about teaching..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                  className="rounded-xl border-[oklch(0.92_0.04_270)] focus:border-[oklch(0.6_0.25_280)]"
                  disabled={isGenerating}
                />
                <Button 
                  onClick={handleSendMessage} 
                  className="gradient-primary text-white rounded-xl shadow-lg"
                  disabled={isGenerating}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="space-y-4">
          <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-6">
              <Button 
                variant="outline" 
                className="w-full justify-start rounded-xl border-[oklch(0.92_0.04_270)] hover:bg-gradient-to-r hover:from-[oklch(0.98_0.02_280)] hover:to-[oklch(0.98_0.02_260)] transition-all"
                onClick={() => setInputMessage('Can you help me generate quiz questions?')}
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                Generate Quiz Questions
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start rounded-xl border-[oklch(0.92_0.04_270)] hover:bg-gradient-to-r hover:from-[oklch(0.98_0.02_280)] hover:to-[oklch(0.98_0.02_260)] transition-all"
                onClick={() => setInputMessage('I need help creating a lesson plan')}
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Create Lesson Plan
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start rounded-xl border-[oklch(0.92_0.04_270)] hover:bg-gradient-to-r hover:from-[oklch(0.98_0.02_280)] hover:to-[oklch(0.98_0.02_260)] transition-all"
                onClick={() => setInputMessage('What teaching strategies do you recommend?')}
              >
                <Lightbulb className="h-4 w-4 mr-2" />
                Teaching Strategies
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start rounded-xl border-[oklch(0.92_0.04_270)] hover:bg-gradient-to-r hover:from-[oklch(0.98_0.02_280)] hover:to-[oklch(0.98_0.02_260)] transition-all"
                onClick={() => setInputMessage('Can you analyze student performance?')}
              >
                <Target className="h-4 w-4 mr-2" />
                Analyze Performance
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
              <CardTitle>Recent Insights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-6">
              <div className="p-3 bg-gradient-to-br from-[oklch(0.98_0.02_280)] to-[oklch(0.99_0.01_260)] rounded-xl border border-[oklch(0.92_0.04_270)]">
                <p className="text-muted-foreground">3 students may need extra help with Calculus</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-[oklch(0.98_0.02_280)] to-[oklch(0.99_0.01_260)] rounded-xl border border-[oklch(0.92_0.04_270)]">
                <p className="text-muted-foreground">Assignment completion rate increased by 15%</p>
              </div>
              <div className="p-3 bg-gradient-to-br from-[oklch(0.98_0.02_280)] to-[oklch(0.99_0.01_260)] rounded-xl border border-[oklch(0.92_0.04_270)]">
                <p className="text-muted-foreground">Best engagement time: 10-11 AM</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Generated Content */}
      <Tabs defaultValue="strategies" className="space-y-6">
        <TabsList className="rounded-xl">
          <TabsTrigger value="strategies" className="rounded-lg">Teaching Strategies</TabsTrigger>
          <TabsTrigger value="questions" className="rounded-lg">Generate Questions</TabsTrigger>
          <TabsTrigger value="lessons" className="rounded-lg">Lesson Plans</TabsTrigger>
        </TabsList>

        <TabsContent value="strategies" className="space-y-4">
          {teachingStrategies.map((strategy) => (
            <Card key={strategy.id} className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{strategy.topic}</CardTitle>
                    <p className="text-muted-foreground mt-1">{strategy.difficulty}</p>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                    AI Suggested
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h4 className="mb-3">Recommended Strategies:</h4>
                <ul className="space-y-2">
                  {strategy.suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Lightbulb className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{suggestion}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 mt-4">
                  <Button size="sm" className="gradient-primary text-white rounded-xl">Apply Strategy</Button>
                  <Button size="sm" variant="outline" className="rounded-xl">Save for Later</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="questions" className="space-y-4">
          <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
              <CardTitle>Generate New Questions</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Select value={questionForm.subject} onValueChange={(value) => setQuestionForm({...questionForm, subject: value})}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select subject" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="Algebra">Algebra</SelectItem>
                      <SelectItem value="Geometry">Geometry</SelectItem>
                      <SelectItem value="Calculus">Calculus</SelectItem>
                      <SelectItem value="Statistics">Statistics</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Difficulty</label>
                  <Select value={questionForm.difficulty} onValueChange={(value) => setQuestionForm({...questionForm, difficulty: value})}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="Easy">Easy</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Hard">Hard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Number of Questions</label>
                <Input 
                  type="number" 
                  placeholder="5" 
                  value={questionForm.count}
                  onChange={(e) => setQuestionForm({...questionForm, count: e.target.value})}
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Specific Topics (optional)</label>
                <Textarea 
                  placeholder="Enter specific topics to focus on..." 
                  rows={2}
                  value={questionForm.topics}
                  onChange={(e) => setQuestionForm({...questionForm, topics: e.target.value})}
                  className="rounded-xl"
                />
              </div>
              <Button onClick={handleGenerateQuestions} className="w-full gradient-primary text-white rounded-xl">
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Questions
              </Button>
            </CardContent>
          </Card>

          {questionBank.map((question) => (
            <Card key={question.id} className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CardTitle>{question.subject}</CardTitle>
                    <Badge className="rounded-full">{question.difficulty}</Badge>
                    <Badge variant="outline" className="rounded-full">{question.type}</Badge>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                    AI Generated
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pt-6">
                <div>
                  <p className="text-muted-foreground">Question:</p>
                  <p className="mt-1">{question.question}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Answer:</p>
                  <p className="mt-1">{question.answer}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="gradient-primary text-white rounded-xl">Use in Assignment</Button>
                  <Button size="sm" variant="outline" className="rounded-xl">Edit Question</Button>
                  <Button size="sm" variant="outline" className="rounded-xl">Generate Similar</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="lessons" className="space-y-4">
          <Card className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
              <CardTitle>Generate New Lesson Plan</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Lesson Topic</label>
                <Input 
                  placeholder="e.g., Introduction to Derivatives" 
                  value={lessonForm.topic}
                  onChange={(e) => setLessonForm({...lessonForm, topic: e.target.value})}
                  className="rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Grade Level</label>
                  <Select value={lessonForm.grade} onValueChange={(value) => setLessonForm({...lessonForm, grade: value})}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Select grade" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                      <SelectItem value="Grade 9">Grade 9</SelectItem>
                      <SelectItem value="Grade 10">Grade 10</SelectItem>
                      <SelectItem value="Grade 11">Grade 11</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Duration (min)</label>
                  <Input 
                    type="number" 
                    placeholder="60" 
                    value={lessonForm.duration}
                    onChange={(e) => setLessonForm({...lessonForm, duration: e.target.value})}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Key Learning Objectives</label>
                <Textarea 
                  placeholder="List the main objectives..." 
                  rows={3}
                  value={lessonForm.objectives}
                  onChange={(e) => setLessonForm({...lessonForm, objectives: e.target.value})}
                  className="rounded-xl"
                />
              </div>
              <Button onClick={handleGenerateLessonPlan} className="w-full gradient-primary text-white rounded-xl">
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Lesson Plan
              </Button>
            </CardContent>
          </Card>

          {lessonPlanTemplates.map((lesson) => (
            <Card key={lesson.id} className="border-0 shadow-lg bg-white rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[oklch(0.98_0.02_280)] to-[oklch(0.98_0.02_260)]">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>{lesson.topic}</CardTitle>
                    <p className="text-muted-foreground mt-1">Duration: {lesson.duration}</p>
                  </div>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 rounded-full">
                    AI Generated
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <h4 className="mb-2">Learning Objectives:</h4>
                  <ul className="space-y-1">
                    {lesson.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Target className="h-4 w-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2">Activities:</h4>
                  <ul className="space-y-2">
                    {lesson.activities.map((activity, index) => (
                      <li key={index} className="flex items-start gap-2 p-2 bg-muted/50 rounded-xl">
                        <span className="text-muted-foreground">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="gradient-primary text-white rounded-xl">Use This Plan</Button>
                  <Button size="sm" variant="outline" className="rounded-xl">Customize</Button>
                  <Button size="sm" variant="outline" className="rounded-xl">Export</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
