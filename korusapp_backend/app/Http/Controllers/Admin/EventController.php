<?php



namespace App\Http\Controllers\Admin;

use App\Models\Event;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EventController extends Controller
{
    // Display a listing of the events
    public function index()
    {
        $events = Event::all();
        return view('admin.events.index', compact('events'));
    }

    // Show the form for creating a new event
    public function create()
    {
        return view('admin.events.create');
    }

    // Store a newly created event in the database
    public function store(Request $request)
    {
        $request->validate([
            'event_time' => 'required|date',
            'event_venue' => 'nullable|string|max:100',
            'event_address' => 'nullable|string|max:100',
            'sheet_music_id' => 'nullable|integer',
            'additional_info' => 'nullable|string',
        ]);

        // Use mass assignment to create a new event
        Event::create($request->all());

        return redirect()->route('admin.index')->with('success', 'Event added successfully!');
    }

    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }









}
