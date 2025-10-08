import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export default function Commands() {
  const [searchQuery, setSearchQuery] = useState("");

  const commandsList = [
    {
      command: "/buy",
      category: "Payments",
      description: "Purchase a subscription plan with QPay integration",
      usage: "/buy [plan]",
      example: "/buy pro",
      output: "Opens QPay payment modal with plan details and pricing",
    },
    {
      command: "/myplan",
      category: "Account",
      description: "View your current subscription details and status",
      usage: "/myplan",
      example: "/myplan",
      output: "Displays subscription tier, renewal date, and payment history",
    },
    {
      command: "/status",
      category: "Info",
      description: "Check bot status and community analytics",
      usage: "/status",
      example: "/status",
      output: "Shows bot uptime, server statistics, and community metrics",
    },
    {
      command: "/review",
      category: "Feedback",
      description: "Leave a review and rate your experience",
      usage: "/review [rating] [message]",
      example: "/review 5 Great bot!",
      output: "Submits your review and displays confirmation message",
    },
  ];

  const filteredCommands = commandsList.filter(
    (cmd) =>
      cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Bot Commands
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Complete list of all Twin Sun Bot commands with usage examples
          </p>

          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search commands..."
              className="pl-12 h-12 text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-commands"
            />
          </div>
        </div>

        <div className="space-y-6">
          {filteredCommands.map((cmd) => (
            <Card key={cmd.command} className="p-6 hover-elevate transition-all duration-300" data-testid={`card-command-detail-${cmd.command.replace('/', '')}`}>
              <div className="flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <code className="text-2xl font-bold text-stellar-blue bg-stellar-blue/10 px-3 py-1 rounded">
                        {cmd.command}
                      </code>
                      <Badge variant="outline" className="text-xs" data-testid={`badge-category-${cmd.category.toLowerCase()}`}>
                        {cmd.category}
                      </Badge>
                    </div>
                    <p className="text-foreground">{cmd.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Usage</h4>
                    <code className="text-sm bg-muted/50 px-3 py-2 rounded block text-foreground" data-testid="text-usage">
                      {cmd.usage}
                    </code>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-muted-foreground mb-2">Example</h4>
                    <code className="text-sm bg-muted/50 px-3 py-2 rounded block text-foreground" data-testid="text-example">
                      {cmd.example}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-2">Expected Output</h4>
                  <div className="bg-card border border-stellar-blue/30 rounded-lg p-4">
                    <p className="text-sm text-foreground" data-testid="text-output">{cmd.output}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredCommands.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No commands found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
