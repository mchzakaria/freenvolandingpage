create table public.early_access_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  source text,
  created_at timestamptz not null default now()
);

create unique index early_access_signups_email_key on public.early_access_signups (lower(email));

alter table public.early_access_signups enable row level security;

create policy "Anyone can sign up"
on public.early_access_signups
for insert
to anon, authenticated
with check (
  email is not null
  and char_length(email) between 3 and 255
  and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
);