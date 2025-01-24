<x-core::layouts.base body-class="d-flex flex-column" :body-attributes="['data-bs-theme' => 'dark']">
    <!-- <x-slot:title>
        @yield('title')
    </x-slot:title> -->

    <div class="page page-center">
        <div class="container container-tight py-4">
            <div class="text-center mb-4">
                @include('core/base::partials.logo')
            </div>

            <x-core::card size="md">
                <x-core::card.body>
                    <h2 class="mb-3 text-center">Welcome Back Admin</h2>

                    <p class="text-secondary mb-4">
                        Proceed to the Admin Dashboard and EXplore fully Access of System.
                    </p>

                    <ul class="list-unstyled space-y">
                    </ul>

                    <div>
                        <form
                            action="{{ route('unlicensed.skip') }}"
                            method="POST"
                        >
                            @csrf

                            @if($redirectUrl)
                                <input type="hidden" name="redirect_url" value="{{ $redirectUrl}}" / >
                            @endif

                            <x-core::button
                                type="submit"
                                class="w-100"
                                color="link"
                                size="sm"
                            >Skip</x-core::button>
                        </form>
                    </div>
                </x-core::card.body>
            </x-core::card>
        </div>
    </div>

    @include('core/base::system.partials.license-activation-modal')
</x-core::layouts.base>
