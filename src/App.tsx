import React from 'react';
import { MessageSquare } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { ThemeToggle } from './components/ThemeToggle';
import { PdfUploader } from './components/PdfUploader';
import { ProfileSection } from './components/ProfileSection';
import { useChat } from './hooks/useChat';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { messages, isLoading, sendMessage, updateContext } = useChat();
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-8 h-8 text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">AI Chat Assistant</h1>
          </div>
          <div className="flex items-center gap-4">
            <PdfUploader onPdfContent={updateContext} disabled={isLoading} />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>
        </div>

        {/* Profile Section */}
        <ProfileSection />

        {/* Chat Container */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors">
          {/* Messages */}
          <div className="h-[500px] overflow-y-auto p-4">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-gray-500 dark:text-gray-400">
                Start a conversation by sending a message or upload a PDF for context
              </div>
            ) : (
              messages.map(message => (
                <ChatMessage
                  key={message.id}
                  message={message.text}
                  isUser={message.isUser}
                />
              ))
            )}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 dark:border-gray-700 p-4">
            <ChatInput onSendMessage={sendMessage} disabled={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}