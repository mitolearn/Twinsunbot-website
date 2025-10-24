import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export default function Commands() {
  const [searchQuery, setSearchQuery] = useState("");

  const commandsList = [
    // Bot Info - First Command
    {
      command: "/bot_info",
      category: "Info",
      description: "Complete bot setup guide with feature explanations and best practices",
      usage: "/bot_info",
      example: "/bot_info",
      output: "Comprehensive guide covering all features, commands, and setup instructions",
    },
    // Admin Commands - Setup & Plan Management
    {
      command: "/setup",
      category: "Admin",
      description: "Subscribe to bot (Basic/Pro/Premium)",
      usage: "/setup",
      example: "/setup",
      output: "Shows subscription tiers with QPay payment buttons to rent the bot for your server",
    },
    {
      command: "/plan_add",
      category: "Admin",
      description: "Create a new role plan with price and description for your community",
      usage: "/plan_add",
      example: "/plan_add",
      output: "Opens a form to create a role plan with role selection, price (₮), and description",
    },
    {
      command: "/plan_list",
      category: "Admin",
      description: "View all role plans with display numbers and database IDs",
      usage: "/plan_list",
      example: "/plan_list",
      output: "Shows table of all role plans with ID, role name, price, and description",
    },
    {
      command: "/plan_toggle",
      category: "Admin",
      description: "Enable/disable a plan",
      usage: "/plan_toggle [plan_id]",
      example: "/plan_toggle 1",
      output: "Toggles the plan's active status - disabled plans won't show in /buy or /paywall",
    },
    {
      command: "/plan_delete",
      category: "Admin",
      description: "Delete a role plan (requires confirmation)",
      usage: "/plan_delete [plan_id]",
      example: "/plan_delete 1",
      output: "Removes the plan after confirmation (existing memberships continue until expiry)",
    },
    {
      command: "/edit_plan_description",
      category: "Admin",
      description: "Update plan marketing description shown to buyers",
      usage: "/edit_plan_description [plan_id]",
      example: "/edit_plan_description 1",
      output: "Opens modal to edit the plan description that appears in /buy and /paywall",
    },
    {
      command: "/paywall",
      category: "Admin",
      description: "Post payment buttons in a channel for members to purchase roles",
      usage: "/paywall",
      example: "/paywall",
      output: "Posts beautiful embed with buttons for each role plan - anyone can click to buy",
    },
    // Manager Role Commands (Delegate Plan Management)
    {
      command: "/set_manager_role",
      category: "Manager",
      description: "Grant a Discord role manager permissions (view stats, no modifications)",
      usage: "/set_manager_role [role]",
      example: "/set_manager_role @Moderator",
      output: "Sets the role as manager - they can view analytics but not edit plans",
    },
    {
      command: "/view_manager_role",
      category: "Manager",
      description: "Check which role currently has manager permissions",
      usage: "/view_manager_role",
      example: "/view_manager_role",
      output: "Displays the current manager role or 'None' if not set",
    },
    {
      command: "/remove_manager_role",
      category: "Manager",
      description: "Remove manager permissions from the set role",
      usage: "/remove_manager_role",
      example: "/remove_manager_role",
      output: "Removes manager role permissions (only admins can view stats)",
    },
    // Analytics & Revenue (Admin Only)
    {
      command: "/status",
      category: "Analytics",
      description: "View revenue, available balance, and request payout (min 100,000₮)",
      usage: "/status",
      example: "/status",
      output: "Shows total revenue, balance after 3% fee, payout button, and subscription status",
    },
    {
      command: "/growth",
      category: "Analytics",
      description: "AI-powered analytics dashboard with charts and GPT-4o recommendations",
      usage: "/growth",
      example: "/growth",
      output: "30-day revenue chart, pie chart, growth %, top plans, and AI business advice",
    },
    {
      command: "/topmembers",
      category: "Analytics",
      description: "View top 10 overall spenders and top 3 per plan with medals",
      usage: "/topmembers",
      example: "/topmembers",
      output: "Leaderboard with top rankings (1st/2nd/3rd place indicators), member names, and total spending",
    },
    // User Commands
    {
      command: "/buy",
      category: "User",
      description: "Browse and purchase role plans privately (ephemeral message)",
      usage: "/buy",
      example: "/buy",
      output: "Shows available role plans with QPay payment buttons in a private message",
    },
    {
      command: "/myplan",
      category: "User",
      description: "View all your active memberships with expiry timers and renewal status",
      usage: "/myplan",
      example: "/myplan",
      output: "Displays all your roles with expiry dates, color-coded status (Healthy/Expiring/Expired), and renewal options",
    },
    {
      command: "/verifypayment",
      category: "User",
      description: "Backup payment verification when payment buttons fail to respond",
      usage: "/verifypayment",
      example: "/verifypayment",
      output: "Manually checks your payment status with QPay and assigns role if payment confirmed",
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
