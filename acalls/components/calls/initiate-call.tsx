"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CallsApi } from "@/lib/api/calls"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const initiateCallSchema = z.object({
  phoneNumber: z.string().min(10),
  prompt: z.string().min(10),
})

export function InitiateCall() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(initiateCallSchema),
  })

  const onSubmit = async (data: z.infer<typeof initiateCallSchema>) => {
    try {
      setIsLoading(true)
      await CallsApi.initiateOutboundCall(data.phoneNumber, data.prompt)
      reset()
    } catch (error) {
      console.error("Failed to initiate call:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Initiate Outbound Call</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <Input {...register("phoneNumber")} type="tel" placeholder="+1234567890" />
            {errors.phoneNumber && <p className="text-destructive text-sm">{errors.phoneNumber.message}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Agent Prompt</label>
            <Textarea {...register("prompt")} rows={4} placeholder="Enter the agent's prompt..." />
            {errors.prompt && <p className="text-destructive text-sm">{errors.prompt.message}</p>}
          </div>

          <Button type="submit" disabled={isLoading} className="w-full bg-[#00FF8C] text-black hover:bg-[#00FF8C]/90">
            {isLoading ? "Initiating Call..." : "Start Call"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

