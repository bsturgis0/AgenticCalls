"use client"

import { useQuery } from "@tanstack/react-query"
import { CallsApi } from "@/lib/api/calls"
import { Card, Title, Table, TableHead, TableRow, TableHeaderCell, TableBody, TableCell } from "@tremor/react"

export function CallHistory() {
  const { data: calls, isLoading } = useQuery({
    queryKey: ["calls"],
    queryFn: CallsApi.getCallHistory,
  })

  if (isLoading) {
    return <div>Loading call history...</div>
  }

  return (
    <Card>
      <Title>Call History</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Number</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Duration</TableHeaderCell>
            <TableHeaderCell>Start Time</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {calls?.map((call) => (
            <TableRow key={call.id}>
              <TableCell>{call.type}</TableCell>
              <TableCell>{call.phoneNumber}</TableCell>
              <TableCell>{call.status}</TableCell>
              <TableCell>{call.duration ? `${Math.round(call.duration / 60)}m` : "-"}</TableCell>
              <TableCell>{new Date(call.startTime).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  )
}

